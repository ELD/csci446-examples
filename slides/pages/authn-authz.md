---
# try also 'default' to start simple
theme: seriph
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## CSCI446 March 29 2023 lecture

  Learning how to wire up MongoDB to Express
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# SPA Authentication and Authorization

---

# Brief recap

- Authentication is the process of identifying _who_ you are
- Authorization is the process of identifying _what_ you can do
- Single Page Apps maintain application state on the _server_ and the _client_
  - This complicates the process of verifying identity or permissions
- Sessions are a concept to preserve a user's authentication and authorization state between page refreshes
- Cookies are the preferred way to persist session data in the browser
  - For machine clients or apps, JSON Web Tokens (JWTs) stored in a secure enclave can be preferred
  - JWTs can also be stored in Cookies

---

# Cookies

- **Fun fact:** the term Cookie originates from _magic cookie_, which was an earlier term for data that was unchanged after being sent and received multiple times[^1]
- Cookies are data you can store in the browser for a specified website/URL
- Cookies can store free-form text data
- Cookies have several attributes that can be set for security or verification purposes

[^1]: [Trend Micro Cookies](https://www.trendmicro.com/vinfo/us/security/definition/cookies#:~:text=The%20term%20%22cookie%22%20was%20derived,sent%20and%20received%20several%20times.)

---

# Cookie Attributes[^1]

| Attribute                      | Description                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `<cookie-name>=<cookie-value>` | Core key=value pair for setting data on the cookie                              |
| `Domain=<domain>`              | Specifies the domain for which the cookie should be sent; includes subdomains   |
| `HttpOnly`                     | Forbids JavaScript access                                                       |
| `Max-Age=<number>`             | Expiration in seconds, similar to `Expires`, but takes precedent                |
| `SameSite=<same-site-value>`   | Determines if cookie should be sent cross-domain or only for same-site requests |
| `Secure`                       | only send over HTTPS                                                            |

[^1]: [MDN Cookie Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

---

# Setting Cookies

- Setting Cookies is done by returning an HTTP header in the response

```
Set-Cookie: sessionId=123456; Max-Age=86400; HttpOnly; SameSite=Lax
```

- Most web frameworks have convenience functions
  - Some, playfully, refer to it as a `CookieJar`
- Express has `cookies` method on the Response object:

```javascript
app.post('/login', (req, res) => {
  // Some authentication code...
  res.status(200)
    .cookie('sessionId', '123456', {
      maxAge: 86400,
      httpOnly: true,
      sameSite: 'Lax',
    })
    .end('');
});
```

---

# Using a session cookie for authentication on the frontend

- You can use cookies set by the API server on the frontend
- If the cookie is `HttpOnly`, you'll need to make an initial request on render to check auth status
  - React Router can make this simpler via its `loader` functionality
- If the cookie isn't `HttpOnly`, it's less secure, but React can read the value of the cookie to verify a `sessionId` (or similar) exists
- You can write a custom hook to make this process simpler
- Once you've verified a successful authentication, you can use the React Context API to provide this value down the render tree
- _All of this still requires server-side validation of the session cookie_

---

# Next Time

- Password encrypting and checking on the server side
- Code examples
- Simple authorization schemes
