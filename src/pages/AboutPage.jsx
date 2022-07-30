import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      AboutPage
      <Link to='/'>
        Back to Home
      </Link>
    </Card>
  )
}

export default AboutPage