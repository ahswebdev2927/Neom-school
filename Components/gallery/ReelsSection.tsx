"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Volume2, VolumeX, Play, Pause, Maximize2, X, ChevronLeft, ChevronRight, Film } from "lucide-react";

interface ReelItem {
  id: number;
  title: string;
  caption: string;
  src: string;
}

const reelsData: ReelItem[] = [
  {
    id: 1,
    title: "Classroom Fun & Active Learning",
    caption: "Joyful learning activities and interactive moments at NEOM School",
    src: "/neomreels/reel-1.mp4",
  },
  {
    id: 2,
    title: "Happy Moments & Campus Life",
    caption: "Children engaging, exploring, and building confident smiles",
    src: "/neomreels/reel-2.mp4",
  },
  {
    id: 3,
    title: "Play & Creative Discovery",
    caption: "Nurturing curiosity, teamwork, and precious school memories",
    src: "/neomreels/reel-3.mp4",
  },
];

export default function ReelsSection() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.15,
  });

  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);
  const [playingStates, setPlayingStates] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
  });
  const [progressStates, setProgressStates] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
  });

  // Modal / Fullscreen Reel state
  const [modalReelIndex, setModalReelIndex] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const [modalMuted, setModalMuted] = useState(false);
  const [modalPlaying, setModalPlaying] = useState(true);

  // Autoplay without sound when entering viewport, pause when exiting
  useEffect(() => {
    reelsData.forEach((reel) => {
      const vid = videoRefs.current[reel.id];
      if (!vid) return;

      if (inView) {
        // Ensure muted when autoplaying upon section entry
        if (activeAudioId !== reel.id) {
          vid.muted = true;
        }
        vid.play().then(() => {
          setPlayingStates((prev) => ({ ...prev, [reel.id]: true }));
        }).catch(() => {
          // Handled if browser blocks
        });
      } else {
        vid.pause();
        setPlayingStates((prev) => ({ ...prev, [reel.id]: false }));
      }
    });
  }, [inView, activeAudioId]);

  // Handle card click or sound toggle
  const handleToggleSound = (reelId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    const clickedVideo = videoRefs.current[reelId];
    if (!clickedVideo) return;

    if (activeAudioId === reelId) {
      // Toggle mute on current active reel
      clickedVideo.muted = !clickedVideo.muted;
      if (clickedVideo.muted) {
        setActiveAudioId(null);
      }
    } else {
      // Mute all other videos
      reelsData.forEach((item) => {
        const v = videoRefs.current[item.id];
        if (v && item.id !== reelId) {
          v.muted = true;
        }
      });

      // Unmute clicked video and ensure playing
      clickedVideo.muted = false;
      setActiveAudioId(reelId);
      clickedVideo.play().catch(() => {});
      setPlayingStates((prev) => ({ ...prev, [reelId]: true }));
    }
  };

  // Toggle play/pause on reel tap
  const handleCardClick = (reelId: number) => {
    const vid = videoRefs.current[reelId];
    if (!vid) return;

    if (activeAudioId !== reelId) {
      // First click unmutes and plays with sound
      handleToggleSound(reelId);
    } else {
      // If already unmuted, toggle play/pause
      if (vid.paused) {
        vid.play().catch(() => {});
        setPlayingStates((prev) => ({ ...prev, [reelId]: true }));
      } else {
        vid.pause();
        setPlayingStates((prev) => ({ ...prev, [reelId]: false }));
      }
    }
  };

  // Update progress bar
  const handleTimeUpdate = (reelId: number) => {
    const vid = videoRefs.current[reelId];
    if (vid && vid.duration) {
      const percent = (vid.currentTime / vid.duration) * 100;
      setProgressStates((prev) => ({ ...prev, [reelId]: percent }));
    }
  };

  // Open modal
  const openReelModal = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    // Pause background videos while modal is open
    reelsData.forEach((reel) => {
      const vid = videoRefs.current[reel.id];
      if (vid) vid.pause();
    });
    setModalReelIndex(index);
    setModalMuted(false);
    setModalPlaying(true);
  };

  // Close modal
  const closeReelModal = () => {
    setModalReelIndex(null);
    // Resume in-view videos
    if (inView) {
      reelsData.forEach((reel) => {
        const vid = videoRefs.current[reel.id];
        if (vid) {
          vid.play().catch(() => {});
        }
      });
    }
  };

  // Modal Next/Prev
  const prevModalReel = () => {
    if (modalReelIndex === null) return;
    setModalReelIndex((prev) => (prev! === 0 ? reelsData.length - 1 : prev! - 1));
  };
  const nextModalReel = () => {
    if (modalReelIndex === null) return;
    setModalReelIndex((prev) => (prev! === reelsData.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-sky-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-leaf-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue font-semibold text-xs md:text-sm mb-3">
            <Film size={16} className="text-primary-blue" />
            <span>Short Video Reels</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
            Our Memories
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto mb-4" />
          <p className="text-gray-600 text-base md:text-lg">
            Joyful glimpses of life at NEOM School. Videos start automatically on silent — tap any video to listen with sound!
          </p>
        </div>

        {/* Reels Grid (Instagram 9:16 Aspect Ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reelsData.map((reel, index) => {
            const isUnmuted = activeAudioId === reel.id;
            const isPlaying = playingStates[reel.id] ?? false;
            const progress = progressStates[reel.id] ?? 0;

            return (
              <div
                key={reel.id}
                onClick={() => handleCardClick(reel.id)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-black aspect-[9/16] max-w-xs md:max-w-sm mx-auto w-full border border-gray-200/50 hover:border-primary-blue/50 transform hover:-translate-y-1 select-none"
              >
                {/* HTML5 Video */}
                <video
                  ref={(el) => {
                    videoRefs.current[reel.id] = el;
                  }}
                  src={reel.src}
                  playsInline
                  loop
                  muted={!isUnmuted}
                  preload="metadata"
                  onTimeUpdate={() => handleTimeUpdate(reel.id)}
                  onPlay={() => setPlayingStates((prev) => ({ ...prev, [reel.id]: true }))}
                  onPause={() => setPlayingStates((prev) => ({ ...prev, [reel.id]: false }))}
                  className="w-full h-full object-cover"
                />

                {/* Top Control Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                  {/* Sound Toggle Button */}
                  <button
                    type="button"
                    onClick={(e) => handleToggleSound(reel.id, e)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                      isUnmuted
                        ? "bg-leaf-green text-white shadow-md animate-pulse"
                        : "bg-black/60 text-white hover:bg-black/80"
                    }`}
                  >
                    {isUnmuted ? (
                      <>
                        <Volume2 size={15} />
                        <span>Sound On</span>
                      </>
                    ) : (
                      <>
                        <VolumeX size={15} />
                        <span>Tap for Sound</span>
                      </>
                    )}
                  </button>

                  {/* Expand to Fullscreen Lightbox Button */}
                  <button
                    type="button"
                    onClick={(e) => openReelModal(index, e)}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all hover:scale-110"
                    title="Watch in Full View"
                  >
                    <Maximize2 size={15} />
                  </button>
                </div>

                {/* Center Play/Pause Indicator (Shown when paused or hovered) */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-primary-blue flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                      <Play size={26} className="ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Overlay with Caption */}
                <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading font-semibold text-base md:text-lg line-clamp-1 drop-shadow-sm">
                      {reel.title}
                    </h3>
                    <div className="text-white/80">
                      {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-200 line-clamp-2 leading-snug drop-shadow-sm mb-3">
                    {reel.caption}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-leaf-green h-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enlarged Reel Lightbox Modal */}
      {modalReelIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeReelModal}
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition z-50"
            onClick={closeReelModal}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Previous Reel */}
          <button
            type="button"
            className="absolute left-3 md:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              prevModalReel();
            }}
            aria-label="Previous Reel"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Reel */}
          <button
            type="button"
            className="absolute right-3 md:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              nextModalReel();
            }}
            aria-label="Next Reel"
          >
            <ChevronRight size={32} />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-sm w-full h-[85vh] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src={reelsData[modalReelIndex].src}
              playsInline
              loop
              autoPlay
              muted={modalMuted}
              className="w-full h-full object-cover"
              onPlay={() => setModalPlaying(true)}
              onPause={() => setModalPlaying(false)}
            />

            {/* Modal Top Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <button
                type="button"
                onClick={() => setModalMuted(!modalMuted)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                  !modalMuted ? "bg-leaf-green text-white shadow-md" : "bg-black/60 text-white"
                }`}
              >
                {!modalMuted ? (
                  <>
                    <Volume2 size={16} />
                    <span>Sound On</span>
                  </>
                ) : (
                  <>
                    <VolumeX size={16} />
                    <span>Muted</span>
                  </>
                )}
              </button>
            </div>

            {/* Modal Bottom Bar */}
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-20">
              <h3 className="font-heading font-bold text-lg mb-1">
                {reelsData[modalReelIndex].title}
              </h3>
              <p className="text-sm text-gray-300">
                {reelsData[modalReelIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

