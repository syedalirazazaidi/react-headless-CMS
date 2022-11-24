import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Banner from './pages/banner'
import Content from './pages/centContent'
import Footer from './pages/footer'
import Header from './pages/header'
import Work from './pages/how-work'
import Main from './pages/main'
import Platform from './pages/platform'
import Hub from './pages/social-hub'

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <Header />
      <Main />
      <Banner />
      <Hub/>
      <Work />
      <Content />
      <Platform />
      <Footer />
    </div>
  )
}

export default App
