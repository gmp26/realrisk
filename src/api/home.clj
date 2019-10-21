(ns api.home
  (:require [coast.logger :as logger]))


(defn index [request]
  {:status  "ok"
   :body    "a simple string"
   :headers {"Content-Type" "application/json"}})


(defn page
  [request]
  (println "api.home::: params request" (:params request))
  (let [session (:session request)]
    (-> (coast/redirect-to :p2)
      (assoc :session {:session-data "Hello"}))
    #_{:params  (:params request)
     :headers {"Content-Type" "application/json"}
     :status  "ok"}))