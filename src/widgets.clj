(ns widgets
  (:require [rum.core :as rum]))

(defn bottom-nav
  "Add a bottom paginator"
  [req]
  (let [id (:page-id req)]
    [:div.inline-flex.flex-none
     [:a {:href (str "#page" (max (dec id) 1))}
      [:button.btn-blue.mr-1
       "< back"]]
     [:a {:href (str "#page" (min (inc id) 9))}
      [:button.btn-blue
       "next >"]]]
    ))

(defn icon
  ([name]
   [:span {:class (str "icon-RR-" name )}]))
