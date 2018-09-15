import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GamesList from './GamesList';

class Games extends Component {
  render() {
    return (
      <div>
        <h1>Games list</h1>

        <GamesList games={this.props.games} />
      </div>
    )
  }
}

Games.propTypes = {
  games: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  games: state.games   
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)