import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, MessageCircle, Share2, Star } from 'lucide-react';
import { tutorials, comments as initialComments } from '../data/tutsdata';

const VideoPlayer = () => {
  const { id } = useParams();
  const [likes, setLikes] = useState(1200);
  const [dislikes, setDislikes] = useState(45);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState(initialComments);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const video = tutorials.find(v => v.id === parseInt(id));
    if (video) {
      setCurrentVideo(video);
    }
  }, [id]);

  // Get suggested videos (excluding current video)
  const getSuggestedVideos = () => {
    return tutorials
      .filter(video => video.id !== parseInt(id))
      .slice(0, 6); // Show 6 suggested videos
  };

  if (!currentVideo) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else {
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
      setDislikes(dislikes + 1);
      setDisliked(true);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        user: "Current User",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80",
        content: newComment,
        likes: 0,
        timestamp: "Just now",
        rating: rating
      };
      setComments([newCommentObj, ...comments]);
      setNewComment("");
      setRating(5);
    }
  };

  return (
    <div className=" max-w-7xl mx-auto px-4 py-8 pt-20 bg-black">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Video Section */}
        <div className="lg:w-2/3">
          <div className="bg-gray-900 aspect-video rounded-xl mb-4 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-white">
              Video Player - {currentVideo.title}
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-white mb-2">{currentVideo.title}</h1>
            <div className="flex items-center justify-between text-sm text-white mb-4 pb-4 border-b">
              <div className="flex items-center gap-4">
                <span>{currentVideo.views} views</span>
                <span>Published {currentVideo.publishedDate}</span>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 ${liked ? 'text-blue-600' : 'text-white'}`}
                >
                  <ThumbsUp className="w-5 h-5" />
                  {likes}
                </button>
                <button
                  onClick={handleDislike}
                  className={`flex items-center gap-1 ${disliked ? 'text-red-600' : 'text-white'}`}
                >
                  <ThumbsDown className="w-5 h-5" />
                  {dislikes}
                </button>
                <button className="flex items-center gap-1 text-white">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
            <p className="text-white mb-8">
              {currentVideo.description}
            </p>

            {/* Comments Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-6">Comments</h3>
              <div className="mb-6">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={3}
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-1 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      >
                        <Star className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleAddComment}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Comment
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white">{comment.user}</span>
                        <span className="text-sm text-white">{comment.timestamp}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= comment.rating ? 'text-yellow-500' : 'text-white'}`}
                          />
                        ))}
                      </div>
                      <p className="text-white">{comment.content}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-white">
                        <button className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {comment.likes}
                        </button>
                        <button className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Videos */}
        <div className="lg:w-1/3">
          <h2 className="text-xl font-bold text-white mb-4">Suggested Videos</h2>
          <div className="space-y-4">
            {getSuggestedVideos().map((video) => (
              <Link to={`/video/${video.id}`} key={video.id} className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex hover:shadow-xl transition-shadow">
                  <div className="w-40 h-24 flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{video.title}</h3>
                    <div className="text-sm text-gray-600">
                      <div>{video.sport}</div>
                      <div>{video.views} views • {video.duration}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;