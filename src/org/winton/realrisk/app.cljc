(ns org.winton.realrisk.app
  "Shadow-cljs starter app. Not used but it works"
  (:require [rum.core :as rum]))

(def foo :foo)

(rum/defc hello
  [& [x]]
  [:h1 "Hello" (if x (str " " x) "!")])

#?(:cljs
   (defn init []
     (println "Hello Magic!")
     (rum/mount (hello "Mike") (.getElementById js/document "hi"))
     ))
