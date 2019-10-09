(ns server
  (:require [coast]
            [routes]
            [clojure.pprint :refer [pprint]])
  (:gen-class))

(defn print-wrapper [handler]
  (fn [req]
    (pprint req)
    (handler req)))

(def app (coast/app {:routes routes/routes}))

(defn -main [& [port]]
  (coast/server app {:port port}))

(comment
  (-main))
