// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Blog from './pages/Blog'
// import Layout from './pages/admin/Layout'
// import Dashboard from './pages/admin/Dashboard'
// import AddBlog from './pages/admin/AddBlog'
// import ListBlog from './pages/admin/ListBlog'
// import Comments from './pages/admin/Comments'
// import Login from './components/admin/Login'
// import 'quill/dist/quill.snow.css'
// import {Toaster} from 'react-hot-toast'
// import { useAppContext } from './context/AppContext'



// const App = () => {

//   const {token, loading} = useAppContext()

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       <Toaster/>
//       <Routes>
//         <Route path='/' element={<Home/>}  />
//         <Route path="/blog/:id" element={<Blog />} />
//         <Route path='/admin' element={token ? <Layout/> : <Login/> }>
//         <Route  index element={<Dashboard/>}/>
//         <Route  path='addBlog' element={<AddBlog/>}/>
//         <Route path="listBlog" element={<ListBlog/>} />
//         <Route path="comments" element={<Comments/>} />
//         </Route>
//       </Routes>
//     </div>
//   )

  
// }

// export default App



import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {
  const { token, loading } = useAppContext() 

  
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        
        {/* Admin Routes - Protected */}
        <Route path='/admin' element={token ? <Layout /> : <Navigate to="/admin/login" />}>
          <Route index element={<Dashboard />} />
          <Route path='addBlog' element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        
        
        <Route path='/admin/login' element={!token ? <Login /> : <Navigate to="/admin" />} />
        
        
        <Route path='*' element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App