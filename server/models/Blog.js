import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
title: String,
subTitle: String,
description: String,
category: String,
image: String,
isPublished: {
type: Boolean,
default: false,
},
}, { timestamps: true })


const Blog = mongoose.model('Blog', blogSchema)

export default Blog;