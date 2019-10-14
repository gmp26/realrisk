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
        [:get "/" :site.home/p1]
        [:get "/p1" :site.home/p1]
        [:get "/p2" :site.home/p2]
        [:get "/p3" :site.home/p3]
        [:get "/p4" :site.home/p4]
        [:get "/p5" :site.home/p5]
        [:get "/p6" :site.home/p6]
        [:get "/p7" :site.home/p7]
        [:get "/p8" :site.home/p8]
        [:get "/p9" :site.home/p9]
        ))

    (coast/api
      (coast/with-prefix "/api"
        [:get "/" :api.home/index]))))
