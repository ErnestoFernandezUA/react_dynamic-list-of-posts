import React, { useState } from 'react';
import { createComment } from '../../api/comments';
import './NewCommentForm.scss';

type Props = {
  postId: string;
};

export const NewCommentForm: React.FC<Props> = ({ postId }) => {
  // eslint-disable-next-line no-console
  console.log('NewCommentForm', postId);

  const initialNewComment = {
    // eslint-disable-next-line quote-props
    'postId': postId,
    name: '',
    email: '',
    body: '',
  };

  // eslint-disable-next-line no-console
  console.log('initialNewComment = ', initialNewComment);

  const [newComment, setNewComment] = useState(initialNewComment);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // eslint-disable-next-line no-console
    console.log('newComment handler before', newComment);

    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });

    // eslint-disable-next-line no-console
    console.log('newComment handler after', newComment);
  };

  const newCommentFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('new comment submit', newComment);

    // eslint-disable-next-line no-console
    createComment(newComment).then((response) => console.log(response));
    setNewComment(initialNewComment);
  };

  return (
    <form
      className="NewCommentForm"
      method="POST"
      onSubmit={newCommentFormSubmit}
    >
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="NewCommentForm__input"
          value={newComment.name}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-field">
        <input
          type="text"
          name="email"
          placeholder="Your email"
          className="NewCommentForm__input"
          value={newComment.email}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-field">
        <textarea
          name="body"
          placeholder="Type comment here"
          className="NewCommentForm__input NewCommentForm__input--textarea"
          value={newComment.body}
          onChange={inputChangeHandler}
        />
      </div>

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Add a comment
      </button>
    </form>
  );
};
