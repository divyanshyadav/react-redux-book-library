import './searchBox.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Textfield from '../Textfield';
import Button from '../Button';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.searchModel = { search: props.value || '' };
    }

    onSubmit = () => {
        const { onSearchClick } = this.props;
        onSearchClick(this.searchModel.search);
    };

    handleKeyPress = (target) => {
        if (target.charCode === 13) {
            this.onSubmit();
        }
    };

    render() {
        const { placeholder, className = '' } = this.props;
        return (
            <div className={`search-box__container ${className}`}>
                <Textfield
                    style={{ marginRight: '0.7em', flex: 1 }}
                    name="search"
                    placeholder={placeholder}
                    model={this.searchModel}
                    onKeyPress={this.handleKeyPress}
                />
                <Button onClick={this.onSubmit}>Search</Button>
            </div>
        );
    }
}

SearchBox.defaultProps = {
    className: '',
    value: '',
    placeholder: 'Search here!!',
};

SearchBox.propTypes = {
    className: PropTypes.string,
    onSearchClick: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default SearchBox;
