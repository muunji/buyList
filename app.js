import express from 'express'
import dotenv from 'dotenv'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//환경변수
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//public 폴더
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
  res.sendFile(__dirname,'index.html')
})

//form 데이터 입력
app.post('/add',(req,res)=>{
  console.log(req.body)
})

app.listen(process.env.PORT, ()=>{
  console.log(`http://localhost:${process.env.PORT}`)
})