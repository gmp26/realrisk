(ns customer
  (:require [coast]))

(defn build [request]
  (println "build session" (:session request))
  (coast/form-for ::create
    [:input {:type "text" :name "customer/email"}]
    [:button {:type "submit"} "Submit"]))


(defn create [request]
  (println "request " (:params request) (select-keys (:params request) [:customer/email]))
  (let [[email errors] (-> (select-keys (:params request) [:customer/email])
                         (coast/validate [[:email [:customer/email]]])
                         (coast/rescue))]
    (println "[email errors]" [email errors])
    (if (nil? errors)
      (-> (coast/redirect-to ::view {:customer-id 1})
        (assoc :session {:email email}))
      (customer/build (merge request errors)))))


(defn view [request]
  [:div
   [:p "session"                                            ;(pr-str (:session request))
    (when (some? (:session request))
      (:session request))]])

