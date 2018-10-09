import React, { Component } from 'react'
import requireAuth from '../../components/HOC/requireAuth'

import ShowTable from '../../components/Tables/ShowTable';

const showRows = [
  {
    id: '0',
    name: 'After Noon Sound Alternative',
    time: 'Tue Sep 12, 12pm-3pm'
  },
  {
    id: '1',
    name: 'Dusty Grooves',
    time: 'Fri Sep 14, 6pm-7pm'
  }
]

class Dashboard extends Component {
  render() {
    return (
      <main className="dashboard">
        <section className="dashboard__shows">
          <h1>Upcoming Shows</h1>
          <ShowTable rows={showRows} />
        </section>
        <section className="dashboard__currently-on-air">
          Currently On Air
        </section>
        <section className="dashboard__shows">
          <h1>Past Shows</h1>
          <ShowTable rows={showRows} />
        </section>
      </main>
    )
  }
}

export default requireAuth(Dashboard)