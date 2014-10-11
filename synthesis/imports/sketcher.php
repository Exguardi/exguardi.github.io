<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Synthesis Sketcher</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<META content="GlaxoSmithKline" name="Kaushik Raha">
<META content=2007-06-11 name=Date>
<META content=2007-06-30 name=ReviewDate>
<META content=Health name=Subject>
<META 
content="GlaxoSmithKline in the US, USA, US programs, US initiatives, patient assistance programs" 
name=Keywords>
<META content="GlaxoSmithKline USA: Homepage" name=Description>
<META content=en name=Language><!-- EFS Standard Metadata End -->


<style type="text/css">
<!--
body,td,th {
	font-family: Arial, Helvetica, sans-serif;
}
body {
	background-image: url(images/bg_content_right.gif);
}
.style2 {font-size: 12px}
.style3 {
	font-size: 14px;
	font-weight: bold;
}
-->
</style>



	
</head>
<body>







<table width="90%"  border="0" cellspacing="0" cellpadding="0">
<form name="form_igod_search" method="post" enctype="multipart/form-data">
  <tr>
    <td ><font size="1" face="Arial, Helvetica, sans-serif"><hr><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="50%" valign="top"><table width="100%"  border="0" cellspacing="3" cellpadding="3">
          <tr>
            <td >
                    

            </td>
          </tr>
          <tr>
            <td>
                 
                    <table width="100%"  border="0" cellspacing="0" cellpadding="0">
                      <tr>
                          
                        <td width="88%">
                        <p>
			<script type="text/javascript" src="http://www.chemaxon.com/marvin/marvin.js"></script>
                        
			<script type="text/javascript">
                            
				<!--
function evaluateChemicalTerms(expression) {
    if(document.MSketch !== null) {
        return document.MSketch.evaluateChemicalTerms(expression);
    } else {
        alert("Cannot evaluate expression on molecule:\n"+
              "no JavaScript to Java communication in your browser.\n");
    }
}

function setFields() {
    var mass = evaluateChemicalTerms("mass()");
    setElementValueAndBackgroundColor('mass', mass, mass <= 500, '#0f0', '#f00');
    var logp = evaluateChemicalTerms("logP()");
    setElementValueAndBackgroundColor('logp', logp, logp <= 5, '#0f0', '#f00');
    var donorcount = evaluateChemicalTerms("donorCount()");
    setElementValueAndBackgroundColor('donorcount', donorcount, donorcount <= 5, '#0f0', '#f00');
    var acceptorcount = evaluateChemicalTerms("acceptorCount()");
    setElementValueAndBackgroundColor('acceptorcount', acceptorcount, acceptorcount <= 10, '#0f0', '#f00');
    var lipinskiruleof5 = evaluateChemicalTerms("(mass() <= 500) && (logP() <= 5) && (donorCount() <= 5) && (acceptorCount() <= 10)");
    setElementValueAndBackgroundColor('lipinskiruleof5', lipinskiruleof5, lipinskiruleof5 === 1, '#0f0', '#f00');
    document.getElementById('atomcount').innerHTML = evaluateChemicalTerms("atomCount()");
    document.getElementById('ringcount').innerHTML = evaluateChemicalTerms("ringCount()");
    document.getElementById('logp').innerHTML = evaluateChemicalTerms("logP()");
    document.getElementById('psa').innerHTML = evaluateChemicalTerms("PSA()");
    document.CTForm.name.value = evaluateChemicalTerms("name()"); 
    document.CTForm.smiles.value = evaluateChemicalTerms("molString('smiles')");
}

function setElementValueAndBackgroundColor(elementID, value, booleanExpression, trueColor, falseColor) {
    document.getElementById(elementID).innerHTML = valueDecorator(value);
    if (booleanExpression) {
    	document.getElementById(elementID).style.backgroundColor = trueColor;
    } else {
    	document.getElementById(elementID).style.backgroundColor = falseColor;
    }
}

function valueDecorator(value) {
    if (value === "") {
    	return "This function is not available without license.";
    }
    return value;
}

function propertyChange(prop) {
    if (prop.indexOf('mol=') !=-1) {
        setFields();
    } 
}

 
				msketch_name = "MSketch";
				msketch_mayscript = true;
				msketch_begin("marvin/", 470, 445);
				msketch_param("abbrevgroupexport,importexport,jep,reactionquerydrawing,view.scripter,singlelinerecordreader,smarts,smilesimport,util");
				msketch_param("molbg", "#FFFFFF");
				//msketch_param("mol", 'igod/.loadedmols/<?php echo $filename;?>');
				msketch_param("undo", "50");
				msketch_param("wmode", "transparent");
				msketch_param("listenpropertychange", "true"); 
				msketch_end();
				//-->                  
			</script>
			<br> 
			</p>
                          
                        </td>
                          
                      </tr>

                    </table>
                

            </td>
          </tr>

        </table></td>
 
      </tr>
    </table></td>
  </tr>
  <tr>
    <td align="center"><hr>
    <table>
    <tr>
            <!-- convert type hidden to submit below to make the form submission kxr 04/20/12-->
	    <td align="right"><input type="hidden" name="btsubmit" value="   Submit   "></td>
	    <!--td align="right"><input type="hidden" name="exsubmit" value="  Explore  " onClick="form.action='chemaxn_desktop.php'"></td--></form>
</tr>
</table>
    
                    
                          <!--iframe id="target_iframe" name="target_iframe" src="" style="width:20;height:50;border:0px"></iframe-->
                          
                          <form NAME="CTForm" action="processinp.php" method="post">
            <table border=1 align="left">
           <tr>
 <td>Molecular weight:</td>
 <td><div ID="mass" style="position:absolute"></div></td>
 </tr>
 <tr>
 <td>logP:</td>
 <td><div ID="logp" style="position:absolute"></div></td>
 </tr>
 <tr>
 <td>H bond donor count:</td>
 <td><div ID="donorcount" style="position:absolute"></div></td>
 </tr>
 <tr>
 <td>H bond acceptor count:</td>
 <td><div ID="acceptorcount" style="position:absolute"></div></td>
 </tr>
 <tr>
 <td>Lipinski rule of 5:</td>
 <td><div ID="lipinskiruleof5" style="position:absolute"></div></td>
 </tr>
 <tr>
 <td><center><div class="lenia">&nbsp;</div></center></td>
 <td><center><div class="lenia">&nbsp;</div></center></td>
 </tr>
 <tr>
 <td>Atom count:</td>
 <td><div ID="atomcount"></div></td>
 </tr>
 <tr>
 <td>Ring count:</td>
 <td><div ID="ringcount"></div></td>
 </tr>
 <tr>
 <td>Polar surface area:</td>
 <td><div ID="psa"></div></td>
 </tr>
 <tr>
 <td>IUPAC name:</td>
 <td><textarea NAME="name" ROWS=2 COLS=35 READONLY="readonly"></textarea></td>
 </tr>
 <tr>
 <td>SMILES:</td>
 <td><textarea NAME="smiles" ROWS=2 COLS=35 READONLY="readonly"></textarea></td>
 </tr>
     <tr>
            <td align="center"><input type="submit" value="   Submit   " name="btsubmit"/></td>
            <td></td>
          </tr>
</table>
</form>
</center>
<script type="text/javascript">
<!--
 setFields();
//-->
</script>


                          
    
    
          </form>

    </table>


</body>
</html>
