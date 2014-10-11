<?php

// get job info.
$molname = $_POST['name'];
$molsmiles = $_POST['smiles'];
$molname = str_replace(" ", "-", $molname);


//Command block commented in Bobby's version
//$command = "/GWD/schem/apps/chemaxon/jchem/default/bin/molconvert --smiles \"$molsmiles\" \"png:w300,atsiz0.6,b32,wireThickness0.15,cpk,transbg,H_off\" -o vulcan/\"$molname.png\"";
//
//echo "Now executing...\n";
//echo "$command\n\n";
//
//$sysout = array();
//exec($command, $sysout, $ret);     // execute command, output into array
//
//if ($ret == 0) {                // check status code. if successful
//    echo "Image generated<br>";
//    foreach ($sysout as $line) {  // process array line by line
//        //echo "$line <br>";
//    }
//} else {
//                foreach ($sysout as $line) {  // process array line by line
//                    echo "$line <br>";
//                }
//                echo "Error check input ";
//                echo "$ret";
//                exit();
//}

echo "<br>molecule name is: $molname<br>";
echo "molecule SMIES is: $molsmiles<br>";
echo "<image src='vulcan/$molname.png'></image>";
echo "<a href='http://compchem.gsk.com/APIChem/sketcher.php'>Import another asset</a><br>";


//echo "<META HTTP-EQUIV=\"Refresh\" CONTENT=\"2; URL=input.php\">";


?>
