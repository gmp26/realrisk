(ns server
  (:require                                                 ;[coast]
    [routes]
    [clojure.pprint :refer [pprint]]
    [ring.middleware.session.cookie :refer [cookie-store]]
    [coast.theta :as coast])
  (:gen-class))

(defn print-wrapper [handler]
  (fn [req]
    (pprint req)
    (handler req)))

(def app (coast/app {:routes routes/routes
                     #_#_:session {:store (cookie-store {:key "X2345678MM76543U"})
                               :cookie-attrs {:max-age 3600}}
                     }))

(defn -main [& [port]]
  (coast/server app {:port port}))

(comment
  (-main)

  (def foo {:a {:b 2}})
  (get-in foo [:a :b :c])
  )
