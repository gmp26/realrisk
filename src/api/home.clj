(ns api.home
  (:require [coast.logger :as logger]))

(defn index [request]
  (println "api req form-params = " (:params request))
  {:status "ok"})
