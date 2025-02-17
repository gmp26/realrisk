(ns routes
  (:require [coast]
            [components]))


(comment                                                    ; from coast..for reference.
  (defn wrap-layout
    "Return the middleware that wraps the response with a layout function `layout`."
    [handler layout]
    (fn [request]
      (let [response (handler request)]
        (if (vector? response)
          (-> (layout request response)
            (h/html)
            (#(str "<!DOCTYPE html>" %))                    ; Added in DOCTYPE in my fork of coast
            (res/ok :html))
          response)))))

(defn rum-layout [request body]
  [:html
   [:head
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    (coast/css "bundle.css")
    (coast/js "bundle.js")]
   [:body
    body]])



(def routes
  (coast/routes
    (coast/site
      (coast/with-layout
        components/layout
        (conj
          (into []
            (map (fn [n]
                   (let [pid (inc n)]
                     [:get (str "/p" pid) (keyword (str "site.home/p" pid)) (keyword (str "p" pid))]))
              (range 9))))
        [:get "/" :site.home/p1 :home]
        [:post "/saver" :site.home/saver ::saver]
        ))



    (coast/api
      (coast/with-prefix "/api"
        [:get "/" :api.home/index]
        [:post "/" :api.home/index]
        ;[:post "/p/:pid" :api.home/page :p]
        ))))

#_(comment
    ; from coast session docs...
    [:get "/customers/build" :customer/build]
    [:get "/customers/:customer-id" :customer/view]
    [:post "/customers" :customer/create])