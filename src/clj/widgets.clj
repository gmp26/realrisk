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
  "Returns hiccup code for one of he icomoon icons"
  ([name]
   [:span {:class (str "icon-RR-" name)}]))

(defn icon-text
  "An icon alongside a line or two of text"
  [icon-name text]
  [:span.flex.flex-row.items-center.w-full.h-12.sm:h-16
   [:span.w-12.sm:w-16.text-3xl.sm:text-4xl (icon icon-name)]
   [:span.w-64.sm:w-full.inline-block.leading-snug.sm:leading-normal text]])

(defn text-input
  "A labelled (titled) text input with help button and help text"
  [{:keys [id type title help active?]
    :or   {id "" type "text" title "???" help nil}}]
  [:div.mb-4.relative
   (when help
     [:div.leading-snug
      [:button.z-20.p-3.pt-0.pb-0.font-sans.text-normal.text-gray-600.absolute.bg-yellow-200.top-0.right-0.text-center.rounded
       "×"]
      [:div.z-10.p-4.mt-6.font-sans.text-normal.text-gray-600.absolute.border-1.bg-yellow-200.h-32.overflow-scroll.top-0.right-0.rounded.shadow-lg
       {:class "w-2/3 sm:w-1/2"} help]
      ])
   [:label.font-bold {:for id} title]
   [:div.flex.flex-row.items-center
    [:input#paper-title.p-2.border-4.border-gray-500.block.w-full.font-sans.text-2xl
     {:type        type
      :name        id
      :placeholder title}]
    (when help
      [:button.m-2.p-1.btn-blue.text-white.font-sans.w-10.h-9.text-center.rounded-full.leading-snug.shadow-xl "?"])]])