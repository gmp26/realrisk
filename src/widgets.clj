(ns widgets
  (:require [rum.core :as rum]))

(defn bottom-nav
  "Add a bottom paginator"
  [req]
  (let [id (:page-id req)]
    [:div.inline-flex.flex-none
     [:a {:href (str "#page" (max (dec id) 1))}
      [:button.text-gray-200.hover:text-white.bg-blue-500.hover:bg-blue-600.font-bold.py-2.px-4.rounded-l
       "< back"]]
     [:a {:href (str "#page" (min (inc id) 9))}
      [:button.text-gray-200.hover:text-white.bg-blue-500.hover:bg-blue-600.font-bold.py-2.px-4.rounded-r
       "next >"]]]
    ))

#_(defn icomoon
  ([name] (icomoon name 50))
  ([name size]
   [:span {:style {:font-size size}}
    [(keyword (str "span.icon-RR-" name))]]))

#_(defmacro ico-docs []
  (icomoon "docs" 20))

(rum/defc icon
  ([name]
   [:span {:class (str "icon-RR-" name )}])
  )
