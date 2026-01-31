import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
  const { slug } = useParams()
  console.log(slug);
  
  return (
    <div>
      <h1>Blog Details Page</h1>
      
    </div>
  )
}
