import React from 'react';
import VideoLIstItem from './video_list_item';


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return(
			<VideoLIstItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video}/>
		)
	});

	return(
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
		);
	};

export default VideoList;