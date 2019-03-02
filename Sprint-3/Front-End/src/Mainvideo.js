import React, { Component } from 'react';
import MainvidDescription from './Mainvideodescription';
import Mainvideoplayer from './Mainvideoplayer';
import MainvideoCommentlist from './MainvideoCommentlist';
import Sidevideolist from './Sidevideolist';
import axios from 'axios';
class Mainvideo extends Component {
    _isMounted = false;
    state = {
        mainvid: { comments: [] },
        sidevideo: []
    }
    componentDidMount() {
        let sidevidPromise = axios.get('http://localhost:8080/video')
        sidevidPromise.then(response => {
            this.setState({
                sidevideo: response.data
            });
        });
        sidevidPromise.catch(error => {
            console.log(error);
        });

        let mainvidPromise = axios.get(`http://localhost:8080/${this.props.match.params.id}`)
        mainvidPromise.then(response => {
            this.setState({
                mainvid: response.data
            })
        });
        mainvidPromise.catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate() {
        this._isMounted = true;

        if (this.state.mainvid.id !== this.props.match.params.id) {
            axios.get(`http://localhost:8080/${this.props.match.params.id}`)
                .then(response => {
                    this.setState({
                        mainvid: response.data
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        }


        axios.get(`http://localhost:8080/video`)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        sidevideo: response.data
                    })
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div>
                <Mainvideoplayer
                    image={this.state.mainvid.image}
                />
                <MainvidDescription
                    title={this.state.mainvid.title}
                    channel={this.state.mainvid.channel}
                    date={this.state.mainvid.timestamp}
                    views={this.state.mainvid.views}
                    likes={this.state.mainvid.likes}
                    description={this.state.mainvid.description}
                />
                <MainvideoCommentlist mainvid={this.state.mainvid} submitHandler={this.addComment} />
                <Sidevideolist sidevid={this.state.sidevideo} mainvid={this.state.mainvid} />
            </div>
        );
    }
}

export default Mainvideo;