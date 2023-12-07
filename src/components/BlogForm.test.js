import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from './BlogForm'

test('<BlogForm />',  async() => { 
    const createBlog = jest.fn()
    const user = userEvent.setup()

    const { container } = render(<BlogForm createBlog={createBlog} />)

    const titleInput = container.querySelector("input[name='title']")
    const authorInput = container.querySelector("input[name='author']")
    const urlInput = container.querySelector("input[name='url']")
    const sendBtn = screen.getByText('create')

    await user.type(titleInput, 'title')
    await user.type(authorInput, 'author')
    await user.type(urlInput, 'https://test.com')
    await user.click(sendBtn)

    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0]).toBe('title')
    expect(createBlog.mock.calls[0][1]).toBe('author')
    expect(createBlog.mock.calls[0][2]).toBe('https://test.com')


 })