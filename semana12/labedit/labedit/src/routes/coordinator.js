export const LoginPage = (history) => {
    history.push("/")
}

export const RegisterPage = (history) => {
    history.push("/register")
}

export const FeedPage = (history) => {
    history.push("/feed")
}

export const PostPage = (history, id) => {
    history.push(`/post/${id}`)
}