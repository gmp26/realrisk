(ns site.home
  (:require [coast]
            [widgets :as w]
            [rum.core :as rum]))


(defn real-risk-logo
  [req]
  [:img.flex-none {:alt "Real Risk!"
                   :src "assets/rr-logo.svg"}])

(defn winton-logo [req]
  [:img.h-20.flex-none {:alt "U of Cambridge Winton Centre for Risk and Evidence Communication"
                        :src "assets/Cambridge logo.svg"}])

#_(defn header-flex [req]
    [:header.z-50.fixed.w-full.flex.flex-wrap.items-center.justify-around.bg-gray-100.border-b-2.border-blue-500
     (real-risk-logo req)
     [:section.hidden.sm:block.mt-3.mb-3
      (winton-logo req)]
     ])

(defn header [req]
  [:header.z-50.bg-white.pl-20.pr-20.fixed.w-full.flex.flex-wrap.items-center.justify-between.border-b-2.border-blue-500
   (real-risk-logo req)
   [:section.hidden.sm:block.mt-3.mb-3
    (winton-logo req)]
   ])


(defn footer [req]
  [:div
   [:section.fixed.block.sm:hidden.mt-3.mb-3.h-20
    (winton-logo req)
    ]])

(defn page1
  [req]
  [:main.leading-loose
   [:div.mb-10.font-serif.text-xl
    [:p "Real Risk helps you to communicate the risks and benefits of scientific research effectively."]
    [:p "To use this tool you need"]
    [:ul
     [:li.flex.flex-row.items-center [:span.w-16.text-4xl (w/icon "docs")] [:span "access to the original research paper"]]
     [:li.flex.flex-row.items-center [:span.w-16.text-4xl (w/icon "people")] "information about the study group and your audience"]
     [:li.flex.flex-row.items-center [:span.w-16.text-4xl (w/icon "percent")] "knowledge of risk or benefit before and after the intervention"]]
    [:button.bg-blue-500.hover:bg-blue-700.text-3xl.text-white.font-sans.py-0.px-4.mb-10.mt-10.rounded "Get the real risk >"]
    [:p "It should take less than 5 minutes to get a summary of the risks associated with any intervention"]]])

(defn page2
  [req]
  [:main.leading-loose
   [:div.mb-10.font-serif.text-xl
    [:p.flex.items-center [:span.w-16.text-4xl (w/icon "docs")] "Which research paper are you writing about?"]
    ]])

(defn page3
  [req]
  [:main.text-grey-600 "Page 3 content"])

(defn page4
  [req]
  [:main.text-grey-600 "Page 4 content"])

(defn page5
  [req]
  [:main.text-grey-600 "Page 5 content"])

(defn page6
  [req]
  [:main.text-grey-600 "Page 6 content"])

(defn page7
  [req]
  [:main.text-grey-600 "Page 7 content"])

(defn page8
  [req]
  [:main.text-grey-600 "Page 8 content"])

(defn page9
  [req]
  [:main.text-grey-600 "Page 9 content"])

#_(defn partial-page*
  [req]
  (let [{title   :page-title
         id      :page-id
         content :page-content} req]
    [:div
     (header req)
     [:section.bg-blue-100.h-screen {:id    (str "page" id)}

      [:div.h-full.pt-32                                    ; adjust this for mobile
       [:div.flex.flex-row
        [:div {:key 1 :class "flex flex-col justify-between w-2/3 sm:px-20 ml-auto bg-red-200"}
         [:section [:h1.h-full.text-blue-600.text-4xl.font-semibold.border-solid title]
          (content req)]
         [:section.mb-8 (w/bottom-nav req)]]
        [:div {:key 2 :class "w-1/3 px-2 sm:py 20 mr-auto bg-white"}
         [:h1 "Results"]]]]]]))

(defn partial-page
  [req]
  (let [{title   :page-title
         id      :page-id
         content :page-content} req]
    [:div.text-gray-700
     (header req)
     [:section.bg-blue-100.h-screen {:id    (str "page" id)}

      [:div.h-full.pt-32                                    ; adjust this for mobile
       [:div.flex.flex-row.h-full
        [:div {:key 1 :class "flex flex-col justify-between w-2/3 sm:px-20 ml-auto"}
         [:section [:h1.text-4xl.font-semibold.border-solid title]
          (content req)]
         [:section.mb-8 (w/bottom-nav req)]]
        [:div {:key 2 :class "w-1/3 px-2 sm:py 20 mr-auto"}
         [:h1.text-4xl.font-semibold.border-solid "Results"]]]]]]))

(defn index [req]
  [:main {:role "main"}
   (header req)
   ; I bet there's a neater way to do this. We're stuffing some parameters into the request map for page layout
   ; functions to consume.
   (partial-page (assoc req :page-id 1 :page-title "Getting started" :page-content page1))
   (partial-page (assoc req :page-id 2 :page-title "Research paper (optional)" :page-content page2))
   (partial-page (assoc req :page-id 3 :page-title "Study group" :page-content page3))
   (partial-page (assoc req :page-id 4 :page-title "Condition" :page-content page4))
   (partial-page (assoc req :page-id 5 :page-title "Intervention" :page-content page5))
   (partial-page (assoc req :page-id 6 :page-title "General risk" :page-content page6))
   (partial-page (assoc req :page-id 7 :page-title "Measure of change" :page-content page7))
   (partial-page (assoc req :page-id 8 :page-title "Population (optional)" :page-content page8))
   (partial-page (assoc req :page-id 9 :page-title "Results" :page-content page9))
   (footer req)
   ]
  )