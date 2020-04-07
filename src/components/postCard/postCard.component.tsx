import React from 'react';
import TimeAgo from 'react-timeago';
import {
    Link
} from "react-router-dom";

import './postCard.component.scss';
import { IPostsEntity } from '../../pages/home/Home.component';


function PostCardComponent(props: IPostsEntity & { reverse: number | boolean }) {
    return <div className={`card-box ${props.reverse ? 'card-box-row-reverse' : 'card-box-row'}`}>
        <div className="thumbnail-wrapper">
            <Link className="post-link" to={`/post/${props.ID}`}>
                <img src={props.post_thumbnail && props.post_thumbnail.URL} alt={props.title} />
            </Link>
        </div>
        <div className="content-wrapper">
            <div className="date">Published: <TimeAgo date={props.date} /></div>
            <Link className="post-link" to={`/post/${props.ID}`}>
                <div className="title" dangerouslySetInnerHTML={{ __html: props.title }} />
            </Link>

            <Link className="post-link" to={`/post/${props.ID}`}>
                <div className="excerpt" dangerouslySetInnerHTML={{ __html: props.excerpt ? props.excerpt : '' }} />
            </Link>
        </div>
    </div>
}

export default PostCardComponent;
