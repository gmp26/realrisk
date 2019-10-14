(ns components
  (:require [coast]))


(defn layout [request body]
  [:html
    [:head
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
     (coast/css "bundle.css")
     (coast/js "bundle.js")]
    [:body
     body]])



(defn link-to [url & body]
  [:a {:href url}
    body])


(defn button-to
  ([am m s]
   (let [data (select-keys m [:data-confirm])
         form (select-keys am [:action :_method :method :class])]
     (coast/form (merge {:class "inline-block m-0"} form)
       [:input (merge data {:class ""
                            :type "submit"
                            :value s})])))
  ([am s]
   (button-to am {} s)))


(defn container [m & body]
  (let [mw (or (:mw m) 8)]
    [:div {:class ""}
     [:div {:class ""}
       body]]))


(defn table [& body]
  [:table {:class "" :cellspacing 0}
   body])


(defn thead [& body]
  [:thead body])


(defn tbody [& body]
  [:tbody {:class ""} body])


(defn tr [& body]
  [:tr {:class ""}
   body])


(defn th
  ([s]
   [:th {:class ""} s])
  ([]
   (th "")))


(defn td [& body]
  [:td {:class ""} body])


(defn submit [value]
  [:input {:class ""
           :type "submit"
           :value value}])


(defn dt [s]
  [:dt {:class ""} s])


(defn dd [s]
  [:dd {:class ""} s])


(defn dl [& body]
  [:dl body])


(defn form-for
  ([k body]
   (form-for k {} body))
  ([k m body]
   (form-for k m {} body))
  ([k m params body]
   (coast/form-for k m (merge params {:class ""})
     [:div {:class ""}
      body])))


(defn label [m s]
  [:label (merge {:for s :class ""} m) s])


(defn input [m]
  [:input (merge {:class ""} m)])


(defn text-muted [s]
  [:div {:class ""}
   s])


(defn el [k m]
  (fn [& body]
    [k m body]))


(->> [:mr1 :mr2 :mr3 :mr4 :mr5]
     (mapv name)
     (mapv #(coast/intern-var % (el :span {:class %}))))


(defn tc [& body]
  [:div {:class ""}
   body])
