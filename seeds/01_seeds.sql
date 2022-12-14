INSERT INTO users (id, name, email, password)
VALUES (1, 'Jacqui', 'jacqui.jacqui@jacqui.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
(2, 'Jeremy', 'jeremy.jeremy@jeremy.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
(3, 'Callie', 'callie.callie@callie.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (id, owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country,street, city, province, post_code, active)
VALUES (1, 1, 'best place on earth', 'really great place', 'https://thisisaurl.com', 'https://thisisanotherurl.com', 500, 2, 7, 20, 'switzerland', 'street', 'some city', 'some province', 'some postal code', true),
(2, 2, '2nd best place on earth', ' another really great place', 'https://url.com', 'https://anotherurl.com', 500, 2, 7, 20, 'canada', 'another street', 'some other city', 'some other province', 'some other postal code', false),
(3, 3, '3rd best place on earth', 'yet another really great place', 'https://test123.com', 'https://test1234.com', 500, 2, 7, 20, 'germany', 'yet another street', 'yet another city', 'yet another province', 'yet another postal code', true);


INSERT INTO reservations (id, start_date, end_date, property_id, guest_id)
VALUES (1, '2018-09-11', '2018-09-26', 1, 1),
(2, '2019-01-04', '2019-02-01', 2, 2),
(3, '2021-10-01', '2021-10-14', 3, 3);

INSERT INTO property_reviews (id, guest_id, property_id, reservation_id, rating, message)
VALUES (1, 1, 1, 1, 5, 'i am a message'),
(2, 2, 2, 2, 5, 'i am another message'),
(3, 3, 3, 2, 4, 'i am yet another message');