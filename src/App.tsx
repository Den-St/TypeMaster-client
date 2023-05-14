import { AuthProvider } from "./containers/AuthProvider"
import { Layout } from "./containers/Layout"
import { RoutesSwitch } from "./Routes"

function App() {
  return <AuthProvider>
    <Layout>
      <RoutesSwitch/>
    </Layout>
  </AuthProvider>
}

export default App
