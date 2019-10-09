(ns widgets
  (:require [rum.core :as rum]))

(defn bottom-nav
  "Add a bottom paginator"
  [req]
  (let [id (:page-id req)]
    [:div.inline-flex.flex-none
     [:a {:href (str "/p" (max (dec id) 1))}
      [:button.btn-blue.mr-1.sm:text-xl
       "< back"]]
     [:a {:href (str "/p" (min (inc id) 9))}
      [:button.btn-blue.sm:text-xl
       "next >"]]]
    ))

(defn icon
  ([name]
   [:span {:class (str "icon-RR-" name )}]))
