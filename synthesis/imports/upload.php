<?php 
/*if ($_POST) 
{
    //check if theres a field called action in the sent data
    if ( isset ($_POST['action']) ) 
    {
        //if it indeed theres an field called action. check if its value its level upload
        if($_POST['action'] === 'Upload Data') 
        {
            //backwards compatible safe check for older php servers, http_post_files is deprecated on newer php servers     
            if(!isset($_FILES) && isset($HTTP_POST_FILES)) 
            {
                $_FILES = $HTTP_POST_FILES;
            }              

            //check if the field file which contains the binary data of the actual file uploaded successfully with no errors, the UPLOAD_ERR_OK means no error and upload was successful        
            if ($_FILES['fileUpload']['error'] === UPLOAD_ERR_OK)
            {
                //check if the file has a name, in this script it has to have a name to be stored, the file name is sent by unity
                if ($_FILES['fileUpload']['name'] !== "")
                {
                    //this checks the file mime type, to filter the kind of files you want to accept, this script is configured to accept only xml files, you can edit this one and the unity side to allow your desired file       
                    if ($_FILES['fileUpload']['type'] === 'text/xml')
                    {                             
                        //construct the final file name path
                        //$uploadfile =  'http://uptus013.corpnet2.com:8080/' . $_FILES['fileUpload']['name'];
                        //$uploadfile =  '/local/appweb/apache/instances/psilo1.gsk.com.8080/htdocs/' . $_FILES['fileUpload']['name'];
			   $uploadfile =  'http://compchem.gsk.com/APIChem/vulcan/' . $_FILES['fileUpload']['name'];

                        //once all safety checks are done, you can safely move the file from the temporary location to a public accessible location
						move_uploaded_file($_FILES['fileUpload']['tmp_name'], $uploadfile);              
                    }
                }  
            }
        }
    }
}*/

if (isset ($_POST['action']) ) 
{ 
	if($_POST['action'] == "Upload Data") 
	{ 
		unset($dataname);
		if(!isset($_FILES) && isset($HTTP_POST_FILES)) 
			$_FILES = $HTTP_POST_FILES; 
  
		if(!isset($_FILES['fileUpload'])) 
			$error["data_file"] = "Data was not found."; 
  
		$dataname = basename($_FILES['fileUpload']['name']); 

		echo basename($_FILES['fileUpload']['name']);  

		if(empty($dataname)) 
			$error["dataname"] = "The name of the data was not found."; 
  
		if(empty($error)) { 
			//$newdata = "Store/" . $dataname;  
			$newdata = $dataname;  
			$result = @move_uploaded_file($_FILES['fileUpload']['tmp_name'], $newdata); 
  
			if ( empty($result) ) 
				$error["result"] = "There was an error moving the uploaded file."; 
		} 
    } 
	else if($_POST['action'] == "Delete Data")
	{
		$file_to_delete = $_FILES['fileToDelete']['name'];//$_GET['file'];
		if (!is_file($file_to_delete))
			$error["fileToDelete"] = "The file requested was not found.";

		if(empty($error)) {
			echo (unlink($file_to_delete) ? "File Deleted" : "Problem deleting file");
		}
	}
} 
else { 
	echo "No form data found"; 
 }
?>
