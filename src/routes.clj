(ns routes
  (:require [coast]
            [components]))


#_(defn wrap-layout
    "Return the middleware that wraps the response with a layout function `layout`."
    [handler layout]
    (fn [request]
      (let [response (handler request)]
        (if (vector? response)
          (-> (layout request response)
              (h/html)
              (#(str "<!DOCTYPE html>" %))
              (res/ok :html))
          response))))

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
        [:post "/saver" :site.home/saver ::saver ]
        [:get "/p/:pid" :site.home/p]


        #_(comment
            ; above code returns
            [
             [:get "/p1" :site.home/p1 :p1]
             [:get "/p2" :site.home/p2 :p2]
             [:get "/p3" :site.home/p3 :p3]
             ; ...
             [:get "/" :site.home/p1]
             [:post "/saver/:pid" :site.home/saver ::saver]]
            )

        #_(comment
            ; from coast session docs...
            [:get "/customers/build" :customer/build]
            [:get "/customers/:customer-id" :customer/view]
            [:post "/customers" :customer/create])
        )

      )

    (coast/api
      (coast/with-prefix "/api"
                         [:get "/" :api.home/index]
                         [:post "/" :api.home/index]
                         ;[:post "/p/:pid" :api.home/page :p]
                         ))))
