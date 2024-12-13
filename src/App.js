import {Component} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import ChoosePhoto from './components/ChoosePhoto'
import ChooseVideo from './components/ChooseVideo'
import CreatePostDesktopWeb from './components/CreatePostDesktopWeb'
import CreatePostForImage from './components/CreatePostForImage'
import CreatePostForVideo from './components/CreatePostForVideo' 
import CreatePostMobileWeb from './components/CreatePostMobileWeb'
import EditProfile from './components/EditProfile'
import Feeds from './components/Feeds'
import Profile from './components/Profile'
import Share from './components/Share'

import HeaderContext from './context/HeaderContext.js'

import './App.css'

class App extends Component {
  state = {}
  render() {
    const authenticated = true;
    return (
      <HeaderContext.Provider
        value={{}}
      >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/choose-photo" element={<ProtectedRoute element={<ChoosePhoto />} authenticated={authenticated} />} />
          <Route path="/choose-video" element={<ProtectedRoute element={<ChooseVideo />} authenticated={authenticated} />} />
          <Route path="/createpost-desktop" element={<ProtectedRoute element={<CreatePostDesktopWeb />} authenticated={authenticated} />} />
          <Route path="/createpost-for-image" element={<ProtectedRoute element={<CreatePostForImage />} authenticated={authenticated} />} />
          <Route path="/createpost-for-video" element={<ProtectedRoute element={<CreatePostForVideo />} authenticated={authenticated} />} />
          <Route path="/createpost-mobile" element={<ProtectedRoute element={<CreatePostMobileWeb />} authenticated={authenticated} />} />
          <Route path="/edit-profile" element={<ProtectedRoute element={<EditProfile />} authenticated={authenticated} />} />
          <Route path="/feeds" element={<ProtectedRoute element={<Feeds />} authenticated={authenticated} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} authenticated={authenticated} />} />
          <Route path="/share" element={<ProtectedRoute element={<Share />} authenticated={authenticated} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
      </HeaderContext.Provider>
    )
  }
}

export default App
