import React from 'react'
import Query from './Query.js'
import { Mutation } from 'react-apollo'
import { GET_NAMES, DELETE_NAME } from './queries.js'

const updateCache = (cache, { data: { deleteNames } }) => {
  const { allNameses } = cache.readQuery({ query: GET_NAMES })

  cache.writeQuery({
    query: GET_NAMES,
    data: {
      allNameses: allNameses.filter(names => names.id !== deleteNames.id)
    }
  })
}

export default () => (
  <ul className="avenir list pl0 ml0 center mw5 ba b--light-silver br3">
    <Query query={GET_NAMES}>
      {({ allNameses }) => {
        return allNameses.map(({ name, id }) => (
          <li className="avenir ph3 pv2 bb b--light-silver" key={id}>
            {name}
            <Mutation
              mutation={DELETE_NAME}
              variables={{ id }}
              update={updateCache}
            >
              {(deleteNames, { loading, error }) => (
                <span
                  onClick={() => deleteNames({ variables: { id } })}
                  className="fr red pointer"
                >
                  {loading ? 'loading' : 'x'}
                </span>
              )}
            </Mutation>
          </li>
        ))
      }}
    </Query>
  </ul>
)
