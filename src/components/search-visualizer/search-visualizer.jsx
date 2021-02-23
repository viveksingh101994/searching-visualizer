import React, { Component } from 'react';
import { randomNumberGenerator } from '../../utils/math';
import './search-visualizer.css';
import { connect } from 'react-redux';
import { Algorithms } from '../../redux/algorithm-reducer/alogrithm-types';
class SearchVisualizer extends Component {
  state = {
    array: [],
    algorithm: ['linear-search', 'binary-search'],
    currentAlgo: '',
  };

  componentDidMount() {
    this.setState({
      currentAlgo: this.props.currentAlgo,
    });
    this.resetArray();
  }

  componentDidUpdate() {
    // this.setState({
    //   currentAlgo: this.props.currentAlgo,
    // });
    // this.resetArray();
  }

  resetArray = () => {
    const array = [];
    for (let i = 0; i <= 10; i += 1) {
      array.push({
        num: randomNumberGenerator(5, 500),
        visited: false,
        result: false,
      });
    }
    const { currentAlgo } = this.state;
    if (currentAlgo === Algorithms.binarySearch) {
      array.sort((a, b) => a.num - b.num);
    }
    this.setState({
      array,
    });
  };

  cleanArray = async () => {
    const { array } = this.state;
    this.setState({
      array: array.map((item) => ({
        num: item.num,
        visited: false,
        result: false,
      })),
    });
  };
  search = async (event) => {
    await this.cleanArray();
    const { array, selectedAlgorithm } = this.state;
    let result = false;
    if (selectedAlgorithm === 0) {
      result = await this.linearSearch(array, event.target.title);
    } else {
      result = await this.binarySearch(array, event.target.title);
    }
    if (!result) {
      alert('Not able to find');
    }
  };

  timer = (ms) => new Promise((res) => setTimeout(res, ms));

  setNewArrayWithDelay = async (array, delay) => {
    await this.timer(delay);
    await this.setState({
      array,
    });
  };
  binarySearch = async (array, elementToSearch) => {
    let items = [...array];
    let start = 0,
      end = items.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index

      let mid = Math.floor((start + end) / 2);
      let midItem = { ...items[mid] };
      midItem.visited = true;
      items[mid] = midItem;
      await this.setNewArrayWithDelay(items, 1000);

      // If element is present at mid, return True
      if (items[mid].num === parseInt(elementToSearch)) {
        midItem.result = true;
        items[mid] = midItem;
        await this.setNewArrayWithDelay(items, 1000);
        return true;
      }

      // Else look in left or right half accordingly
      else if (items[mid].num < parseInt(elementToSearch)) {
        start = mid + 1;

        let startItem = { ...items[start] };
        startItem.visited = true;
        items[start] = startItem;
        let endItem = { ...items[end] };
        endItem.visited = true;
        items[end] = endItem;
        await this.setNewArrayWithDelay(items, 1000);
      } else {
        let startItem = { ...items[start] };
        startItem.visited = true;
        items[start] = startItem;
        let endItem = { ...items[end] };
        endItem.visited = true;
        items[end] = endItem;
        await this.setNewArrayWithDelay(items, 1000);
        end = mid - 1;
      }
    }

    return false;
  };
  linearSearch = async (array, elementToSearch) => {
    let items = [...array];
    for (let i = 0; i < items.length; i++) {
      let item = { ...items[i] };
      item.visited = true;
      items[i] = item;

      if (items[i].num === parseInt(elementToSearch)) {
        item.result = true;
        items[i] = item;
        await this.setNewArrayWithDelay(items, 1000);
        return true;
      }
      await this.setNewArrayWithDelay(items, 1000);
    }
    return false;
  };

  getBackgroundElement = (visited, result) => {
    if (visited && result) {
      return '#8bcf0c';
    }
    if (visited) {
      return '#0c9ecf';
    }
    return '#181e54';
  };
  render() {
    const { array } = this.state;
    return (
      <div>
        <div className="chart">
          {array.map(({ num, visited, result }, idx) => {
            const backgroundColor = this.getBackgroundElement(visited, result);
            return (
              <div
                key={idx}
                className="bar"
                title={num}
                style={{
                  height: `${num}px`,
                  backgroundColor,
                  cursor: 'pointer',
                }}
                onClick={this.search}
              >
                {num}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProp = ({ algorithm: { currentAlgo } }) => {
  return {
    currentAlgo,
  };
};
export default connect(mapStateToProp, null)(SearchVisualizer);
