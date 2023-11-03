import { useState } from 'react'
import { toast } from "react-toastify";

import AppText from '../../components/AppText/AppText'
import AppButton from '../../components/AppButton/AppButton'
import AppInput from "../../components/AppInput/AppInput"

import { uploadMedia } from '../../lib/cloudinary'
import { createTeamService } from '../../services/teamService';

function NewTeam() {
  const [name, setname] = useState("")
  const [logo, setlogo] = useState(null)
  const [imagePreview, setImagePreview] = useState(null);

   // Function to handle file input change and set image preview
   const handleFileChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result); // Set the image preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setname("")
    setlogo(null)
    setImagePreview(null)
  }

  const handleSave = async() => {
    if(!name || !logo) {
      toast.error("Please fill in all details")
      return
    }

    const logoUploadRes = await uploadMedia(logo)
    if(!logoUploadRes) return

    const _logo = {
      public_id: logoUploadRes.public_id,
      secure_url: logoUploadRes.secure_url
    }

    const teamRes = await createTeamService({name, logo: _logo})
    toast.success("created team successfully")

    resetForm()
  }

  return (
    <div className='flex justify-center items-center h-screen w-full'>

      <div className='bg-white w-[500px] h-auto p-10 translate-y-[-50px]'>
        {/* header information */}
        <div className='mt-3 '>
          <AppText bold medium content={"New Team"} />
          <AppText content={"add team information ..."} />
        </div>

        <div className='w-auto mt-10 space-y-10'>
          <div className=''>
            <AppInput 
              label={"Team name*"}
              value={name}
              onChange={setname}
            />      
          </div>

          <div className=''>
            <AppInput 
              type={"file"}
              label={"Team Logo*"}
              value={name}
              onChange={(file) => {
                setlogo(file); // Store the selected file
                handleFileChange(file); // Update the image preview
              }}
              fileType="image/jpeg,image/png,image/gif" 
            />      
          </div>

            {/* Display the image preview */}
            {imagePreview && (
            <div className='text-center'>
              <img src={imagePreview} alt='logo Preview' className='max-h-48 mx-auto' />
            </div>
          )}

          <AppButton style={"!mt-[70px]"} label={"Save"} invert={true} onClick={handleSave} />
        </div>
      </div>


    </div>
  )
}

export default NewTeam
