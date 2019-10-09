# realrisk


## Architecture
Realrisk includes a Coast based web server which generates an initial site from hiccup markup. However, the site frontend is a single page app. Since this also uses hiccup to generate html, there is some opportunity to share startup code between the server and the client to make for a smoother user experience.

It is possible the active java Coast server may be replaced by a static page. We'll see. 

### Starting the server
From the command line:
```make server```
or, in development, to start a repl
```make repl```.

However, the project is configured for Intellij, and you can start a clojure
nREPL there. Use the 'Run with Deps option'.

When running from a REPL, switch to the server namespace ```in-ns 'server```.
Load the server file, and execute ```(-main)```.

In development view the site at http://localhost:1337.

***

#### Original Coast Server instructions.  

Note that we are not currently using a database, so you can skip the db creation and migration steps.

```bash
git clone git@github.com:your-user-name/realrisk.git
cd realrisk
make db/create
make db/migrate
```

#### Dev

```bash
make repl # starts an nrepl server
```

```clojure
; in your editor, connect to the nrepl server
; in atom with proto-repl, it's Ctrl+Cmd+Y then enter
; then when you're in the repl evaluate -main
(-main)
```

```bash
curl http://localhost:1337 # or just open it in your browser
```

#### Ship
```bash
make db/migrate
make assets
make uberjar
java -jar target/realrisk.jar -m server 1337
```

***

### Useful refs
https://github.com/diamondap/ring-sample
http://clojure-doc.org/articles/tutorials/basic_web_development.html
https://www.anthony-galea.com/blog/post/getting-started-w

### Window sizing and scrolling
https://javascript.info/size-and-scroll-window

### Mailing
* Clojurewerkz Mailer https://github.com/diamondap/ring-sample