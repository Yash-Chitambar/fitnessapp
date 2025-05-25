# FLEX - Simplified Fitness App Structure

## 🎯 **Core Features (Simplified)**

**FLEX focuses on two main things:**
1. **Workout Recommendations with Friends** - Tinder-style swipe interface
2. **Groups** - Instagram-like group management

## 📱 **App Structure**

### **3-Tab Navigation:**
- **Home**: Instagram-style feed with groups and upcoming workouts
- **Discover**: Tinder-style swipe for workout recommendations  
- **Profile**: Settings, calendar connections, and theme toggle

## 📁 **Updated Folder Structure**

```
fitness_app/
├── app/                          # Expo Router app directory
│   ├── (auth)/                   # Auth group routes (future)
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   └── _layout.tsx
│   ├── (tabs)/                   # Main tab navigation (3 tabs)
│   │   ├── index.tsx             # Home (Groups + Upcoming)
│   │   ├── discover.tsx          # Tinder-style swipe recommendations
│   │   ├── profile.tsx           # Profile & settings
│   │   └── _layout.tsx
│   ├── (modals)/                 # Modal screens (future)
│   │   ├── friends.tsx           # Friends management modal
│   │   ├── create-group.tsx      # Group creation modal
│   │   └── group-details.tsx     # Group details modal
│   ├── _layout.tsx               # Root layout
│   └── +not-found.tsx
│
├── components/                   # Reusable UI components
│   ├── ui/                       # Basic UI components
│   │   ├── Button.tsx            ✅ Created
│   │   ├── Card.tsx              ✅ Created
│   │   ├── SwipeCard.tsx         # For discover screen
│   │   └── index.ts
│   ├── groups/                   # Group-related components
│   │   ├── GroupCard.tsx
│   │   ├── GroupsList.tsx
│   │   └── CreateGroupForm.tsx
│   └── friends/                  # Friend-related components
│       ├── FriendsList.tsx
│       └── AddFriendForm.tsx
│
├── hooks/                        # Custom React hooks
│   ├── useTheme.ts               ✅ Created
│   ├── useSwipeGestures.ts       # For discover screen
│   ├── useGroups.ts
│   └── useFriends.ts
│
├── styles/                       # Styling and theming
│   ├── themes/                   # Theme definitions
│   │   ├── light.ts              ✅ Created
│   │   ├── dark.ts               ✅ Created
│   │   └── index.ts              ✅ Created
│   └── animations.ts             # Swipe animations
│
├── types/                        # TypeScript type definitions
│   ├── groups.ts
│   ├── friends.ts
│   ├── workouts.ts
│   └── index.ts
│
└── utils/                        # Utility functions
    ├── swipeLogic.ts             # Swipe gesture logic
    ├── groupUtils.ts
    └── constants.ts
```

## 🎨 **Key Features Implemented**

### ✅ **Home Screen (Instagram-style)**
- **FLEX branding** at the top
- **Friends button** in header (like Instagram stories)
- **Horizontal scrolling groups** with member avatars
- **Quick actions** (Discover, Create Group, My Stats)
- **Upcoming workouts** section

### ✅ **Discover Screen (Tinder-style)**
- **Swipeable workout cards** with gesture animations
- **Match percentage** for each recommendation
- **Participant details** and group information
- **Swipe right to join, left to pass**
- **Smooth animations** with react-native-reanimated

### ✅ **Profile Screen**
- **FLEX branding**
- **Theme toggle** (light/dark mode)
- **Calendar connections**
- **Settings and preferences**

## 🎯 **Simplified User Flow**

1. **Home**: See your groups and upcoming workouts
2. **Tap Friends**: Modal to manage friends (Instagram-style)
3. **Discover**: Swipe through workout recommendations
4. **Join workouts**: Swipe right or tap "Join!"
5. **Profile**: Manage settings and toggle dark mode

## 🚀 **Next Development Steps**

1. **Add friends modal** from home screen button
2. **Implement group creation** modal
3. **Add real swipe animations** and haptic feedback
4. **Connect to backend** for real data
5. **Add authentication** flow
6. **Implement calendar** integration

## 🎨 **Design Philosophy**

- **Simplified**: Focus on core features only
- **Familiar**: Instagram + Tinder UX patterns
- **Beautiful**: Red/white theme with dark mode
- **Engaging**: Swipe interactions and smooth animations

## 📱 **Current Status**

✅ **App renamed to FLEX**
✅ **3-tab navigation** (Home, Discover, Profile)
✅ **Instagram-style home** with groups
✅ **Tinder-style discover** with swipe gestures
✅ **Theme system** with dark mode toggle
✅ **Consistent FLEX branding** across all screens

The app is now focused, simplified, and ready for the core workout recommendation and group features! 