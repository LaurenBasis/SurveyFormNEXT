import Layout from '../components/Layout'
import Form from '../components/Form'

class Page extends React.Component {

  render() {
    return (
      <Layout>
        <header class="masthead">
          <div class="container h-100">
            <div class="row h-100">
              <div class="col-lg-12 my-auto">
              <Form></Form>
              </div>
            </div>
          </div>
        </header>
      </Layout>
    )
  }
}

export default Page