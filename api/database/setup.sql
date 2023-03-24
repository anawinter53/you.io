DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    diary_date DATE UNIQUE NOT NULL,
    diary_title VARCHAR(80),
    diary_entry VARCHAR(800)
);

INSERT INTO diary
    (diary_date, diary_title, diary_entry)
VALUES
    ('2021-03-07 15:45:21', 'The One.', 'Dear diary,
I can''t believe it''s been a week since I first saw her in the bookstore. Beck. That''s her name. I''ve been watching her every move since then, learning everything I can about her. It''s amazing how much you can find out about someone just by following them on social media. I know all of her likes and dislikes, her friends, her routines. I feel like I know her better than anyone else. And I''m starting to think that maybe, just maybe, she''s the one for me.'),
    ('2021-03-09 21:43:13', 'Complications.', 'Dear diary,
Things are getting complicated. Beck is seeing someone else, but I can''t help feeling that he''s not right for her. He doesn''t appreciate her the way I do. He doesn''t understand her the way I do. I know I can make her happy, if only she would give me a chance. I''ve been trying to get closer to her, to make her see that we belong together. But it''s not easy. She''s always surrounded by her friends and her ex, and it''s hard to find a moment alone with her. But I''m not giving up. I''ll do whatever it takes to win her over.'),
    ('2021-03-14 23:12:01', 'Freeing Her.', 'Dear diary,
I did something terrible today. I couldn''t take it anymore. Beck''s boyfriend was getting in the way, and I knew I had to do something about it. So I followed him to his apartment and took care of him. It wasn''t pretty, but it had to be done. Now Beck is free to be with me, and I know she''ll be happier than she''s ever been. I just have to be patient, to wait for the right moment to tell her how I feel. She''ll understand, I''m sure of it.'),
    ('2021-03-21 03:45:23', 'I''m not the monster here.', 'Dear diary,
Everything is falling apart. Beck found out about what I did, and she''s terrified of me. She doesn''t understand that I did it for her, that I only want what''s best for her. She thinks I''m a monster, and she''s pushed me away. I can''t let that happen. I need her in my life. I need her to see that I''m not the bad guy here. I''ll do whatever it takes to make her see the truth.'),
    ('2021-03-27 16:42:03', 'The End of Her.', 'Dear diary,
It''s over. Beck is gone, and I don''t know what to do. I loved her so much, and I thought she loved me too. But she couldn''t handle the truth about me. She couldn''t see that everything I did was for her. And now I''m alone again, with only my thoughts and my memories. Maybe it''s for the best. Maybe I''ll find someone else who understands me, who appreciates me for who I am. But for now, I''ll just have to keep watching, waiting for the next person who catches my eye.')
    
