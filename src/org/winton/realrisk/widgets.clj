(ns org.winton.realrisk.widgets)

(def svg-close-button
  "Not used yet, but see https://codeburst.io/creating-a-modal-dialog-with-tailwind-css-42722c9aea4f.
  This version updated to Tailwind > v1.0"
  [:span.absolute.top-0.bottom-0.right-0.p-4
   [:svg.h-12.w-12.fill-current.text-grey.hover:text-grey-darkest
    {:role "button" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 20 20"}
    [:title "Close"]
    [:path {:d "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1
    1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697
    1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}]]])

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
    :or   {id "" type "text" title "???" help nil active? nil}}]

  [:div.mb-4.relative
   [:p (pr-str (str "***" id "-help") active?)]
   (when (and help active?)
     [:div.leading-snug
      [:button.z-20.p-3.pt-0.pb-0.font-sans.text-normal.text-gray-600.absolute.bg-yellow-200.top-0.right-0.text-center.rounded
       "×"]
      [:div.z-10.p-4.mt-6.font-sans.text-normal.text-gray-600.absolute.border-1.bg-yellow-200.h-32.overflow-scroll.top-0.right-0.rounded.shadow-lg
       {:class "w-2/3 sm:w-1/2"} help]
      ])
   [:label.font-bold {:for id} title]
   [:div.flex.flex-row.items-center
    [:input.p-2.border-4.border-gray-500.block.w-full.font-sans.text-2xl
     {:type        type
      :name        id
      :class       id
      :placeholder title}]
    (when help
      [:button.m-2.p-1.btn-blue.text-white.font-sans.w-10.h-9.text-center.rounded-full.leading-snug.shadow-xl
       {:name  (str id "-help")
        :value (str (not active?))}
       "?"])]])