import React,{ useState,useEffect } from 'react'

 function Find() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [upload_form_Complete, setUpload_form_Complete] = useState(false);

    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      medicines: '',
    });
  
    const { name, phone, medicines } = formData;
  
    const isButtonDisabled = !(name && phone && medicines);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Prepare the data to be sent to the server
      const formDataToSend = {
        name,
        phone,
        medicines,
        file: file, // You can also send the file data to the server
      };
    
      try {
        const response = await fetch('https://sheikh-medical-store.onrender.com/medicines', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        });
    
        if (response.status === 201) {
          setFormData({
            name: '',
            phone: '',
            medicines: '',
          });
    
          // Show a success message to the user
          setUpload_form_Complete(true);
    
          // Hide the success message after 10 seconds
          setTimeout(() => {
            setUpload_form_Complete(false);
          }, 4000);
        } else {
          // Handle the error
          console.error('Form submission failed.');
        }
      } catch (error) {
        console.error('Form submission error:', error);
      }
    };
    
    // const handleSubmit = (e) => {
    //   e.preventDefault();
      
    //   // Handle form submission here
    //   setFormData({
    //     name: '',
    //     phone: '',
    //     medicines: '',
        
    //   });
    //   setUpload_form_Complete(true);

    // // Hide the success message after 10 seconds
    // setTimeout(() => {
    //   setUpload_form_Complete(false);
    // }, 4000);
    // };
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        setProgress(0); // Reset progress to 0 when a new file is selected
        setUploadComplete(false); // Hide the message when a new file is selected

        // Simulate file upload progress (for demonstration purposes)
        simulateFileUpload(selectedFile);
      }
    };
    const simulateFileUpload = (selectedFile) => {
        const totalSize = selectedFile.size;
        const chunkSize = 20000; // You can adjust this value as needed
        let bytesUploaded = 0;
    
        const uploadInterval = setInterval(() => {
          if (bytesUploaded >= totalSize) {
            clearInterval(uploadInterval);
            setUploadComplete(true);
            setTimeout(() => {
              setUploadComplete(false);
            }, 5000);
          } else {
            const newProgress = (bytesUploaded / totalSize) * 100;
            setProgress(newProgress);
            bytesUploaded += chunkSize;
          }
        }, 100); // Adjust the interval for smoother progress updates
      };
      useEffect(() => {
        if (progress >= 40) {
          setProgress(100);
        }
      }, [progress]);
      const progressBarStyle = {
        backgroundColor: 'green', // Background color of the progress bar
      };
      
    
  return (
    <div className=' container'> <span className='font-weight-bold text-warning'>Welcome to Sheikh Medical store Internal Search Engine <br/>We are feeling very great to serve you.<br/>In order to reduce your waiting time please follow the below steps.</span>
    <div className='row pt-4 '>
        <div className='col'>
        <span className=''>If you are having the precption. Please Upload it.
        <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} className='form-group' /></span>    
        
      {file && (
        <span className="upload-container ">
          <progress value={progress} max="100"  className="border progress-bar-container "style={progressBarStyle}/>
          <h4>{`${progress.toFixed(2)}% Uploaded`}</h4>
          {uploadComplete && (
            <p className='upload-success '>We have received your precption. As per our internal search, almost every medicines is available. Please rush to our shop to grab the medicines.</p>
          )}
        </span>
      )}
           
            
    
        </div>
        <div className='col bg-secondary rounded'>
       <span className='text-light'>If you are not having the precption. Please fill out the below form.</span> 
         <div class="container"> 
       
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <div class="form-group col">
                <label for="name" className='text-light'>Name:</label>
                <input type="text" id="name" name="name" value={name} required onChange={handleChange}/>
            </div>
            <div class="form-group col ">
                <label for="phone" className='text-light'>Ph.No:</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={handleChange} required/>
            </div>
          </div>
            <div class="form-group">
                <label for="medicines" className='text-light'>List of Medicines needed:</label>
                <textarea id="medicines" name="medicines"  onChange={handleChange} value={medicines}  required></textarea>
            </div>
            {upload_form_Complete && (
            <p className='upload-success'>We have received your precption. As per our internal search, almost every medicines is available. Please rush to our shop to grab the medicines.</p>
          )}
            <div class="btn-container">
                <button type="submit" className={`btn-submit ${isButtonDisabled ? 'disabled-button' : ''}`} disabled={isButtonDisabled} >Send </button>
            </div>

        </form>
        
    </div> 







        </div>
    </div>
    </div>
  )
}
export default Find;
