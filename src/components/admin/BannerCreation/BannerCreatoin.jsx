import React from 'react'
import api from '../../../helper/axios/userAxios'
import { adminApi } from '../../../helper/axios/adminAxios'
import { useState } from 'react'
function BannerCreatoin() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')
    const handleSubmit = ()=>{
        const form = new FormData()
        form.append('image',image)
        form.append('title',title)
        form.append('description',description)

        adminApi.post('/banner',form,{
            headers:{
                "content-type":"multipart/form-data"
            }
        }).then((response)=>{
            if(response.data.status == 201){
                console.log('success');
            }
        })
    }
  return (
    <div className='w-3/4 bg-white p-11 rounded-3xl h-3/4 shadow-lg'>
        <div className='flex flex-col '>
            <input type="text" placeholder='Title' className='p-2 mt-4 ' onChange={(e)=> setTitle(e.target.value)} value={title} />
            <input type="file" name="image" className='p-2 mt-4'  onChange={(e)=> setImage(e.target.files[0])} />
            <img className='w-96 p-2 mt-4' src={image?URL.createObjectURL(image):""} alt=""  />
            <input type="text" placeholder='Description' className='p-2 mt-4' onChange={(e)=> setDescription(e.target.value)} value={description } />
            <button className='p-2 mt-4 bg-sky-400 w-2/4 rounded-3xl' onClick={handleSubmit}>Upload</button>
        </div>
    </div>
  )
}

export default BannerCreatoin
