#!/usr/bin/env perl
use warnings;

use strict;

use FindBin;

use JSON::XS;
use File::Slurp;

my $schema_version = shift() or die('schema version required');

my $upgrade_data_text = read_file("$FindBin::Bin/../upgrade.json");
my $upgrade_data = decode_json($upgrade_data_text);

if (not exists $upgrade_data->{$schema_version}) {
    die("schema version $schema_version not in upgrade.json");
}

for my $script_name (keys %{ $upgrade_data->{$schema_version} }) {
    my $scripts = $upgrade_data->{$schema_version}->{$script_name};
    my $filename = "$FindBin::Bin/sql/updates/schema-change/$schema_version.$script_name.sql";
    my $data = join("\n", '-- Generated by CompileSchemaScripts.pl from:', map { '-- ' . $_ } @$scripts) . "\n";
    $data .= <<~'EOSQL';
        \\set ON_ERROR_STOP 1
        BEGIN;
        SET search_path = musicbrainz, public;
        SET LOCAL statement_timeout = 0;
        EOSQL
    for my $script (@$scripts) {
        my @script_data = read_file("$FindBin::Bin/sql/updates/$script");
        $data .= "--------------------------------------------------------------------------------\n";
        $data .= "SELECT '$script';\n";
        for my $line (@script_data) {
            unless ($line =~ qr{^\s*(\\set ON_ERROR_STOP 1|BEGIN;|COMMIT;)\s*\s*$}) {
                $data .= $line;
            }
        }
    }
    $data .= <<~'EOSQL';
        COMMIT;
        EOSQL
    write_file($filename, \$data);
}
