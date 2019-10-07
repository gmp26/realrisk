# realrisk

## Start

```bash
git clone git@github.com:your-user-name/realrisk.git
cd realrisk
make db/create
make db/migrate
```

## Dev

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

## Ship
```bash
make db/migrate
make assets
make uberjar
java -jar target/realrisk.jar -m server 1337
```

### Thanks to functional human for the starter
https://medium.com/swlh/building-a-rest-api-in-clojure-3a1e1ae096e

with code at
https://github.com/functionalhuman/rest_demo

### Other refs
https://github.com/diamondap/ring-sample
http://clojure-doc.org/articles/tutorials/basic_web_development.html
https://www.anthony-galea.com/blog/post/getting-started-w

### Window sizing and scrolling
https://javascript.info/size-and-scroll-window

### CSS options?

Tachyons
Tailwind
Bulma

* Clojurewerkz Mailer https://github.com/diamondap/ring-sample