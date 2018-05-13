# Vimeoflix

Demo application showing how to use React, Redux, and CSS Modules to create a Vimeo client app.

## Getting started

Visit vimeoflix.facingmonday.com or 

```
git clone
cd vimeoflix
yarn install
yarn serve
$ open http://localhost:8080
```

## Answers to Questions

1. Was the question/problem clear? Did you feel like something was missing or not explained correctly?

> 

2. How much time did you spend on each part: understanding, designing, coding, testing?

> I spent a couple hours thinking about it and with the intention of going on a coding bender
> over the weekend. I have about 15 hours in the project total. 

3. What would you have done differently if you have more time or resources?

> I would have spent more time on animations and cleaning up the ui with more polished css. As far
> as featues go, I really wanted to include authentication so you could log into the app with
> your Vimeo account, then load the initial player with your watch list and subscribed channels. 

4. Are there any performance bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact?

> Not that I can think of. There isn't a whole lot going on and no server side requests. The bundle might be
> a little large for how simple the app is. There could be some optimizing done there.

5. How would your solution cope if the API was slow, broken, or returned incorrect data?

> There are error and loading states for all the data driven components so it should handle network issues.
> There isn't any validation on the data received from the api calls though so it wouldn't handle that very well.

6. Anything else you want to share about your solution or the problem?

I added a lot more code than was probably necessary but I wanted to show how I generally build my client 
applications. Code that I repeat often I create snippets for(included in repo) to speed up development and 
reduce errors. I know the instructions said not to use any other frameworks or libraries, but I was hoping you
meant things like bootstrap and that redux would be ok. Building a react app without some sort of state
management utility would be rough. I would have normally used a css preprocessor but not doing so forced me to do some new things with CSS Modules which was a learning experience. But I'd still want to use something like less with
the CSS modules.
